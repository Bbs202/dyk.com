fetch("https://opentdb.com/api.php?amount=50&category=21&difficulty=medium&type=multiple", {
   "method": "GET" 
})
.then(response=> response.json())
.then(data=> {
    console.log(data);
    data.results.map((item)=>{
        document.getElementById('questions').innerHTML += (
            `
         <div>
         <div id="box">
         <div id="questions">
          <p id="ask">${item.question}</p>
          <p id="ans">
          <b>Answer</b>: 
          <span style="background-color:grey; padding:4px; margin: 4px; border-radius:6px;">
          <em>
          ${item.correct_answer}
          </em>
          </span>
          </p>
          </div>
         </div>
          <br/>
         </div>

            `
        )
    })
})
.catch(err=>{
    console.log(err);
})

