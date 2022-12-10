const setuScroling = () =>{
  const container = [...document.querySelectorAll(".movie-container")]
  const nextButton = [...document.querySelectorAll(".next-btn")]
  const prevButton = [...document.querySelectorAll(".pre-btn")]

  container.forEach((item, i) =>{
    let containerDimension = item.getBoundingClientRect()
    let containerWidth = containerDimension.width

    nextButton[i].addEventListener("click", () =>{
      item.scrollLeft += containerWidth
    })

    prevButton[i].addEventListener("click", () =>{
      item.scrollLeft -= containerWidth
    })
  })
}