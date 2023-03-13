import React from 'react'
import Article from './Article'

export default function ArticleList(props) { //posts has a minutes for each element
    const articleList = props.post.map(el => {
        return <Article id={el.id} minutes={el.minutes} title={el.title} date={el.date} preview={el.preview}/>
    })
  return (
    <main>
        {articleList}
    </main>
  )
}
