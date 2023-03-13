import React from 'react'

export default function Article(props) {
    let emojified = '';
    let cur = props.minutes;
    //☕️ = 5m, round UP every 5
    //🍱 = 10m, round UP every 10
    if (cur >= 30)
    {
        for (let i = Math.ceil(cur/10); i > 0; i--)
            emojified = emojified + '🍱';
    }
    else
    {
        for (let i = Math.ceil(cur/5); i > 0; i--)
            emojified = emojified + '☕️';
    }
  return (
    <article>
        <h3>{props.title}</h3>
        <small>{props.date} • {emojified} {props.minutes} mintue read</small>
        <p>{props.preview}</p>
    </article>
  )
}
