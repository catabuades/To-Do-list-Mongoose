console.log('Javascript ready to go...')
// remove botton
$('.remove').on('click', function (e) {
  const idTask = $(this).siblings('.task-id').val()
  const url = `/task/${idTask}`
  const method = 'DELETE'

  $.ajax({url, method})
    .then(msg => {
      $(this).parent().remove()
      console.log(msg)
    })
})

// checkbox completed
$('input.done.fa.fa-square-o').on('click', function (e) {
  const idTask = $(this).val()
  const url = `/completed/${idTask}`
  const method = 'PUT'
  const data = { done: true }

  $.ajax({ url, method, data })
    .then(msg => {
      window.location.reload()
    })
})
// edit botton pencil
$('.title-box span').on('click', function () {
  $(this).parent()
      .addClass('edit')
      .find('form input').focus()
})
// form edit title
$('.title-box form').on('submit', function (e) {
  e.preventDefault()
  const newTitleTask = $(this).find('input').val()
  const idTask = $(this).closest('.task-item').find('.task-id').val()
  const url = `/task/${idTask}`
  const method = 'PUT'
  const data = { title: newTitleTask }

  $.ajax({ url, method, data })
    .then(msg => {
      $(this).siblings('span').text(newTitleTask)
      $(this).parent().removeClass('edit')
    })

  console.log(newTitleTask)
})
