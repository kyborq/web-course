$.ajax({
    type: "POST",
    data: {
        title: "zxcvxvc",
    },
    url: "https://dummyjson.com/products/add",
})
.done((data) => {
    console.log(data)
});