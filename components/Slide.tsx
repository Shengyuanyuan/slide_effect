import React from 'react'

const Slide = () => {
  return (
    <div className="carousel">
      <div className="list">
        <div className="item">
            <img src="/img1.jpg"/>
            <div className="content">
                <div className="author"> YuanDev</div>
                <div className="title">DESIGN SLIDER</div>
                <div className="topic">ANIMAL</div>
                <div className="des">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vero corrupti numquam iusto consectetur quaerat placeat nulla voluptate autem voluptatum voluptatem optio repellendus modi facere saepe, explicabo suscipit, minus deserunt, quos officiis facilis quas tempore! Maiores, aspernatur commodi excepturi iste, fugiat eius libero eos aperiam blanditiis quas nihil, ad voluptates?
                </div>
                <div className="buttons">
                    <button className="text-black">SEE MORE</button>
                    <button>SUBCRIBE</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Slide
