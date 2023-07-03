document.write("<table border ='1'>");
for (let i=1; i<11; i++){
    document.write("<tr>");
    for (let a=1; a<11; a++){
        if (a%2==0){
            document.write("<td bgcolor='red'>"+i*a + "</td>");
        
        }
        else{
            document.write ("<td bgcolor='yellow'>" + i*a + "</td>")
        }
    }
    document.write ("</tr>");
}
document.write ("</table>")