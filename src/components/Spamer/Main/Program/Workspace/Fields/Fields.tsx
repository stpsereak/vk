import React from 'react'
import s from './Fields.module.css'
import Title from '../../../../../common/Title/Title'
import MyTextField from '../../../../../common/MyTextField'
import storage from 'store2'

function Fields () {
  return (
    <div>
      <div className={s.field}>
        <Title>Текст рассылки</Title>
        <MyTextField
          name="message"
          multiline
          fullWidth
          rows="5"
          variant="outlined"
          placeholder="Ваш текст. Привет Игорь, Настя, Миша и т.д"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const fields = storage.local.get('fields')
            storage.local.set('fields', {
              ...fields,
              message: e.currentTarget.value
            })
          }}
        />
      </div>

      <div className={s.field}>
        <Title>Вложения</Title>
        <MyTextField
          name="attachment"
          multiline
          fullWidth
          rows="8"
          variant="outlined"
          placeholder="[[ photo100172_166443618 | photo-72378974_347384669 ]]
video217849689_456239447
и т.д."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const fields = storage.local.get('fields')
            storage.local.set('fields', {
              ...fields,
              attachment: e.currentTarget.value
            })
          }}
        />
      </div>
    </div>
  )
}

export default Fields
