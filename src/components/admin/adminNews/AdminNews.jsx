import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../../Login/Login.css';
import axios from 'axios';

export const AdminNews = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios('https://ecohaven.pythonanywhere.com/api/v1/category/').then((res) => setCategory(res.data));
  }, []);

  console.log(category)

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('photo', data.photo[0]);

    const token = localStorage.getItem('token');

    axios
      .post('https://ecohaven.pythonanywhere.com/api/v1/news/', formData, {
        headers: {
          'Authorization': `Token ${token}`,
        },
      })
      .then((response) => {
        alert('новость создана');
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="AdminNews">
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="login__forms">
          <div className="login__title">Создать новость</div>

          <div>
            <input
              type="text"
              id="title"
              placeholder="Название"
              {...register('title', { required: true })}
            />
            {errors.title && <span>Введите название</span>}
          </div>
          <div>
            <input
              type="text"
              id="description"
              placeholder="Описание"
              {...register('description', { required: true })}
            />
            {errors.description && <span>Введите описание</span>}
          </div>
          <div>
            <select id="category" {...register('category', { required: true })}>
              <option value="" disabled>
                Выберите категорию
              </option>
              {category.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
            {errors.category && <span>Выберите категорию</span>}
          </div>
          <div>
            <input
              type="file" // Добавляем поле для выбора фото
              id="photo"
              {...register('photo', { required: true })}
            />
            {errors.photo && <span>Выберите фото</span>}
          </div>
          <button type="submit">Создать</button>
          <div className="to__home">
            <Link to="/admin">Назад</Link>
          </div>
        </div>
      </form>
    </div>
  );
};