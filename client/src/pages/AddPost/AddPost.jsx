import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';

import 'easymde/dist/easymde.min.css';

import styles from './AddPost.module.css';

export const AddPost = () => {
  const imageUrl = '';
  const [value, setValue] = React.useState('');

  const handleChangeFile = () => { };

  const onClickRemoveImage = () => { };

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
  );

  return (
    <Paper style={{ padding: 30 }}>
      <Button sx={{ color: "#123c8f" }} variant="outlined" size="large">
        Загрузить превью
      </Button>
      <input type="file" onChange={handleChangeFile} hidden />
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
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Заголовок статьи..."
        fullWidth
      />
      <TextField classes={{ root: styles.tags }} variant="standard" placeholder="Тэги" fullWidth />
      <SimpleMDE className={styles.editor} value={value} onChange={onChange} options={options} />
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