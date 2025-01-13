import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/slices/auth';
import { useUploadFileMutation } from '../../services/files';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';

import 'easymde/dist/easymde.min.css';

import styles from './AddPost.module.css';

export const AddPost = () => {
  const history = useHistory()
  const isAuth = useSelector(selectIsAuth)
  const [imageUrl, setImageUrl] = React.useState('')
  const [value, setValue] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [tags, setTags] = React.useState('')
  const inputFileRef = React.useRef(null)

  const [uploadFile, { data, error, isLoading }] = useUploadFileMutation()
  const uploadFileHandler = (data) => uploadFile(data)

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
    setValue(value);
  }, []);

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
      {imageUrl && (
        <img className={styles.image} src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
      )}
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
        value={value}
        onChange={onChange}
        options={options} />
      <div className={styles.buttons}>
        <Button sx={{ bgcolor: "#123c8f", color: "#fff" }} size="large" variant="contained">
          Опубликовать
        </Button>
        <a href="/">
          <Button sx={{ color: "#123c8f" }} size="large">Отмена</Button>
        </a>
      </div>
    </Paper>
  );
};

export default AddPost;