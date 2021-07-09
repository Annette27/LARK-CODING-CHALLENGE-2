// document.getElementById("nope").style.display="none"
function ajax(){
  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
    
        if(this.readyState==4&& this.status==200){
          var response = JSON.parse(this.responseText);
       
        var Jgrocery = response.grocery;
       
        
        var k = '<tbody>'
        for(i = 0; i <1 ; i++){
         k+= '<tr>';
        k+= '<th ">'+"Serial"+  '<br>' +"Number" +'</th>'
        k+= '<th>' + " Name" + '</th>'
        k+= '<th >' + "Quantity" + '</th>'
        k+= '<th >'+ "Unit" + '</th>'
        k+= '<th>' + "Department" + '</th>'
        k+= '<th ">' + "Notes" + '</th>'
       '</tr>'
        }
       for(i = 0;i < Jgrocery.length; i++){
            k+= '<tr>';
            k+= '<td>' + Jgrocery[i].Serial  + '</td>';
            k+= '<td>' + Jgrocery[i].Name + '</td>';
            k+= '<td>' + Jgrocery[i].Quantity + '</td>';
            k+= '<td>' + Jgrocery[i].Unit + '</td>';
            k+= '<td>' + Jgrocery[i].Department + '</td>';
            k+= '<td>' + Jgrocery[i].Notes + '</td>';
            k+= '</tr>';
        }
        
        k+='</tbody>';
        }
        document.getElementById('demo').innerHTML = k;
        setTimeout(write,1000)

 function write(){

  document.getElementById("nope").innerHTML= "Mom : Thank you dear"
 }
    }
    xhttp.open("GET","index.json", true);
    
    xhttp.send();
    }
   
    