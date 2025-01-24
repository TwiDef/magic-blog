import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/slices/auth';
import { useUploadFileMutation } from '../../services/files';
import { useCreatePostMutation, useGetPostByIdQuery, usePatchPostMutation } from '../../services/posts';
import { setEditPostId } from '../../redux/slices/posts';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';

import 'easymde/dist/easymde.min.css';

import styles from './AddPost.module.css';

export const AddPost = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const isAuth = useSelector(selectIsAuth)
  const { edit_post_id } = useSelector(state => state.posts)
  const _id = useSelector(state => state.auth.data)

  const inputFileRef = React.useRef(null)
  const [imageUrl, setImageUrl] = React.useState('')
  const [text, setText] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [tags, setTags] = React.useState('')

  const [createPost, { __, error, isLoading }] = useCreatePostMutation()
  const createPostHandler = (data) => createPost(data)

  const [patchPost] = usePatchPostMutation()
  const patchPostHandler = (data) => patchPost(data)

  const [uploadFile, _] = useUploadFileMutation()
  const uploadFileHandler = (data) => uploadFile(data)

  const { data } = useGetPostByIdQuery(edit_post_id)

  const handleChangeFile = async (e) => {
    try {
      const formData = new FormData()
      formData.append("image", e.target.files[0])
      const fileData = await uploadFileHandler(formData)
      setImageUrl(fileData.data.url)

    } catch (error) {
      console.warn(error)
      alert("Ошибка загрузки изображения")
    }
  }

  const onClickRemoveImage = () => {
    setImageUrl("")
  }

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);

  const onSubmit = async () => {
    try {
      const postData = await createPostHandler({
        title,
        text,
        imageUrl: `http://localhost:4444${imageUrl}`,
        tags,
        user: _id
      })
      history.push(`/posts/${postData.data._id}`)

      if (postData.error) {
        alert(`${postData.error.data[0].msg}`)
      }

    } catch (error) {
      alert("Не удалось создать пост")
      console.log(error)
    }
  }

  const onSave = async () => {
    try {
      const postData = await patchPostHandler({
        title,
        text,
        imageUrl: `http://localhost:4444${imageUrl}`,
        tags,
        user: _id
      })
      history.push(`/posts/${postData.data._id}`)

      if (postData.error) {
        alert(`${postData.error.data[0].msg}`)
      }

    } catch (error) {
      alert("Не удалось сохранить пост")
      console.log(error)
    }
  }

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  )

  React.useEffect(() => {
    !isAuth && history.push("/")
  }, [isAuth])

  React.useEffect(() => {
    setImageUrl(data?.imageUrl)
    setText(data?.text)
    setTitle(data?.title)
    setTags(data?.tags)
  }, [data])

  React.useEffect(() => {
    return () => {
      dispatch(setEditPostId(null))
    }
  }, [])

  return (
    <Paper style={{ padding: 30 }}>
      <Button
        onClick={() => inputFileRef.current.click()}
        sx={{ color: "#123c8f" }} variant="outlined" size="large">
        Загрузить превью
      </Button>
      <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <Button
          sx={{ bgcolor: "#123c8f", color: "#fff" }}
          variant="contained"
          color="error"
          onClick={onClickRemoveImage}>
          Удалить
        </Button>
      )}

      <img className={styles.image} src={imageUrl && imageUrl} alt="Uploaded" />

      <br />
      <br />
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Заголовок статьи..."
        fullWidth
      />
      <TextField
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        classes={{ root: styles.tags }}
        variant="standard"
        placeholder="Тэги"
        fullWidth />
      <SimpleMDE
        className={styles.editor}
        value={text}
        onChange={onChange}
        options={options} />
      <div className={styles.buttons}>
        {edit_post_id ?
          <Button
            onClick={onSave}
            sx={{ bgcolor: "#123c8f", color: "#fff" }} size="large" variant="contained">
            Сохранить
          </Button>
          :
          <Button
            onClick={onSubmit}
            sx={{ bgcolor: "#123c8f", color: "#fff" }} size="large" variant="contained">
            Опубликовать
          </Button>
        }
        <a href="/">
          <Button sx={{ color: "#123c8f" }} size="large">Отмена</Button>
        </a>
      </div>
    </Paper>
  );
};

export default AddPost;