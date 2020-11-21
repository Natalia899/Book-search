
const renderData = function(data){
    
        const source = $('#books-template').html()
        const template = Handlebars.compile(source)
        const bookInfo = template({data})
        $('.book-container').empty().append(bookInfo)
      }

const renderDescription = function(description) {

}
    


const getBooks = function () {
    let input = $('#search').val()
    $.get(`/subject/${input}`, function (data) {
       
        console.log(data); 
       renderData(data)
    })
}