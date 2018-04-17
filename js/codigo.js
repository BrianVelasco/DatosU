$(document).ready(function(){      
      
      $("#botondep").click(function(){
         $("#dep").html("<h3>En el 2016 se distribuyeron creditos agropecuarios a cada uno de los departamentos <h3><div id='grafica'></div>");
         
         $("#dep").append("<h5>Total de Creditos = 310970 </h5>");
         $("#dep").append("<h4>Los Departamentos con mas creditos fueron:</h4>");
         $("#dep").append("<table border=1><thead><tr><th>Departamento</th><th>Total de Creditos</th><th>%</th></tr></thead><tbody id='bodyt'></tbody></table>");
         $("#bodyt").append("<tr><td>Nariño</td><td>31797</td><td>10.2%</td></tr>");
         $("#bodyt").append("<tr><td>Antioquia</td><td>28416</td><td>9.13%</td></tr>");
         $("#bodyt").append("<tr><td>Cundinamarca</td><td>27120</td><td>8.7%</td></tr>");
         $("#bodyt").append("<tr><td>Boyaca</td><td>27016</td><td>8.7%</td></tr>");
         $("#bodyt").append("<tr><td>Tolima</td><td>26010</td><td>8.4%</td></tr>");
         $("#dep").append("<h3>El total de creditos se distribuyeron de la siguiente manera</h3><div id='consultas'></div>");
         $("#consultas").html("<h3>Consultas por Departamentos</h3>");
         $("#consultas").append("<center><form id='formulario1'><select id='slt'><option value='1'>AMAZONAS</option>\n\
        \n\<option value='2'>ANTIOQUIA</option>\n\
        \n\<option value='3'>ARAUCA</option>\n\
        \n\<option value='4'>ATLANTICO</option>\n\
        \n\<option value='5'>BOGOTA</option>\n\
        <option value='6'>BOLIVAR</option>\n\
        \n\<option value='7'>BOYACA</option>\n\
        \n\<option value='8'>CALDAS</option>\n\
        \n\<option value='9'>CAQUETA</option>\n\
        \n\<option value='10'>CASANARE</option>\n\
        \n\<option value='11'>CAUCA</option>\n\
        \n\<option value='12'>CESAR</option>\n\
        \n\<option value='13'>CHOCO</option>\n\
        \n\<option value='14'>CORDOBA</option>\n\
        \n\<option value='15'>CUNDINAMARCA</option>\n\
        \n\<option value='16'>GUANIA</option>\n\
        \n\<option value='17'>GUAVIARE</option>\n\
        \n\<option value='18'>HUILA</option>\n\
        \n\<option value='19'>LA GUAJIRA</option>\n\
        \n\<option value='20'>MAGDALENA</option>\n\
        \n\<option value='21'>META</option>\n\
        \n\<option value='22'>NARIÑO</option>\n\
        \n\<option value='23'>NORTE DE SANTANDER</option>\n\
        \n\<option value='24'>PUTUMAYO</option>\n\
        \n\<option value='25'>QUINDIO</option>\n\
        \n\<option value='26'>RISARALDA</option>\n\
        \n\<option value='27'>SAN ANDRES Y PROVIDENCIA</option>\n\
        \n\<option value='28'>SANTANDER</option>\n\
        \n\<option value='29'>SUCRE</option>\n\
        \n\<option value='30'>TOLIMA</option>\n\
        \n\<option value='31'>VALLE DEL CAUCA</option>\n\
        <option value='32'>VAUPES</option>\n\
        <option value='33'>VICHADA</option>\n\
        </select></form></center>");
          
         
         
          
        $("#consultas").append("<button type='button' class='btn btn-success' id='botcons'>CONSULTAR</button>");
        //("#dep").append("<div id='gd'></div>");
        
       $("#botcons").click(function (){
           var opcion = $("#slt").val();
            
            
            
            if(opcion == 1){
                $("#gd").html("<h4>Creditos en Amazonas</h4>");
                $("#gd").append("<h5>Total de Creditos = 3 -> 0.0009647%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>0</td><td>0%</td></tr><tr><td>Mediano</td><td>2</td><td>66.66%</td></tr><tr><td>Pequeño</td><td>1</td><td>33.33%</td></tr></tbody></table>");
                 $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Amazonas'></div>");
                
               Morris.Bar({
  element: 'Amazonas',
  data: [
    {x: 'Grande', y: 0},
    {x: 'Mediano', y: 2},
    {x: 'Pequeño', y: 1}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
});
            }
            
            if(opcion == 2){
                $("#gd").html("<h4>Creditos en Antioquia</h4>");
                $("#gd").append("<h5>Total de Creditos = 28416 -> 9.137859%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>1691</td><td>5.950%</td></tr><tr><td>Mediano</td><td>4368</td><td>15.371%</td></tr><tr><td>Pequeño</td><td>22357</td><td>78.677%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Antioquia'></div>");
                
               Morris.Bar({
  element: 'Antioquia',
  data: [
    {x: 'Grande', y: 1691},
    {x: 'Mediano', y: 4368},
    {x: 'Pequeño', y: 22357}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            
            
            if(opcion == 3){
                $("#gd").html("<h4>Creditos en Arauca</h4>");
                $("#gd").append("<h5>Total de Creditos = 1728 -> 0.555%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>4</td><td>0.231%</td></tr><tr><td>Mediano</td><td>882</td><td>51.0416%</td></tr><tr><td>Pequeño</td><td>842</td><td>48.726%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Arauca'></div>");
                
               Morris.Bar({
  element: 'Arauca',
  data: [
    {x: 'Grande', y: 4},
    {x: 'Mediano', y: 882},
    {x: 'Pequeño', y: 842}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            
            if(opcion == 4){
                $("#gd").html("<h4>Creditos en Atlantico</h4>");
                $("#gd").append("<h5>Total de Creditos = 1852 -> 0.59555%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>203</td><td>10.961%</td></tr><tr><td>Mediano</td><td>872</td><td>47.084%</td></tr><tr><td>Pequeño</td><td>777</td><td>41.954%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Atlantico'></div>");
                
               Morris.Bar({
  element: 'Atlantico',
  data: [
    {x: 'Grande', y: 203},
    {x: 'Mediano', y: 872},
    {x: 'Pequeño', y: 777}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            
            if(opcion == 5){
                $("#gd").html("<h4>Creditos en Bogota</h4>");
                $("#gd").append("<h5>Total de Creditos = 1746 -> 0.561469%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>835</td><td>47.823%</td></tr><tr><td>Mediano</td><td>498</td><td>28.522%</td></tr><tr><td>Pequeño</td><td>413</td><td>23.654%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Bogota'></div>");
                
               Morris.Bar({
  element: 'Bogota',
  data: [
    {x: 'Grande', y: 835},
    {x: 'Mediano', y: 498},
    {x: 'Pequeño', y: 413}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            
            if(opcion == 6){
                $("#gd").html("<h4>Creditos en Bolivar</h4>");
                $("#gd").append("<h5>Total de Creditos = 5586 -> 1.796314%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>62</td><td>1.199%</td></tr><tr><td>Mediano</td><td>1614</td><td>28.893%</td></tr><tr><td>Pequeño</td><td>3910</td><td>69.996%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Bolivar'></div>");
                
               Morris.Bar({
  element: 'Bolivar',
  data: [
    {x: 'Grande', y: 62},
    {x: 'Mediano', y: 1614},
    {x: 'Pequeño', y: 3910}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            
            if(opcion == 7){
                $("#gd").html("<h4>Creditos en Boyaca</h4>");
                $("#gd").append("<h5>Total de Creditos = 27016 -> 8.687654%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>30</td><td>0.111%</td></tr><tr><td>Mediano</td><td>4028</td><td>14.909%</td></tr><tr><td>Pequeño</td><td>22958</td><td>84.979%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Boyaca'></div>");
                
               Morris.Bar({
  element: 'Boyaca',
  data: [
    {x: 'Grande', y: 30},
    {x: 'Mediano', y: 4028},
    {x: 'Pequeño', y: 22958}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            
            if(opcion == 8){
                $("#gd").html("<h4>Creditos en Caldas</h4>");
                $("#gd").append("<h5>Total de Creditos = 10444 -> 3.358523</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>141</td><td>1.350%</td></tr><tr><td>Mediano</td><td>1842</td><td>17.636%</td></tr><tr><td>Pequeño</td><td>8461</td><td>81.0130%</td></tr></tbody></table>");
                
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Caldas'></div>");
                
               Morris.Bar({
  element: 'Caldas',
  data: [
    {x: 'Grande', y: 141},
    {x: 'Mediano', y: 1842},
    {x: 'Pequeño', y: 8461}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            
            if(opcion == 9){
                $("#gd").html("<h4>Creditos en Caqueta</h4>");
                $("#gd").append("<h5>Total de Creditos = 5564 -> 1.789240%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>10</td><td>0.179%</td></tr><tr><td>Mediano</td><td>1665</td><td>29.924%</td></tr><tr><td>Pequeño</td><td>3889</td><td>69.895%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Caqueta'></div>");
                
               Morris.Bar({
  element: 'Caqueta',
  data: [
    {x: 'Grande', y: 10},
    {x: 'Mediano', y: 1665},
    {x: 'Pequeño', y: 3889}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            if(opcion == 10){
                $("#gd").html("<h4>Creditos en Casanare</h4>");
                $("#gd").append("<h5>Total de Creditos = 4788 -> 1.539698%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>119</td><td>2.485%</td></tr><tr><td>Mediano</td><td>2120</td><td>44.277%</td></tr><tr><td>Pequeño</td><td>2549</td><td>53.237%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Casanare'></div>");
                
               Morris.Bar({
  element: 'Casanare',
  data: [
    {x: 'Grande', y: 119},
    {x: 'Mediano', y: 2120},
    {x: 'Pequeño', y: 2549}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            if(opcion == 11){
                $("#gd").html("<h4>Creditos en Cauca</h4>");
                $("#gd").append("<h5>Total de Creditos = 24799 -> 7.974724%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>80</td><td>0.322%</td></tr><tr><td>Mediano</td><td>4983</td><td>20.093%</td></tr><tr><td>Pequeño</td><td>19736</td><td>79.583%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Cauca'></div>");
                
               Morris.Bar({
  element: 'Cauca',
  data: [
    {x: 'Grande', y: 80},
    {x: 'Mediano', y: 4983},
    {x: 'Pequeño', y: 19736}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            if(opcion == 12){
                $("#gd").html("<h4>Creditos en Cesar</h4>");
                $("#gd").append("<h5>Total de Creditos = 4165 -> 1.339357%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>89</td><td>2.136%</td></tr><tr><td>Mediano</td><td>1501</td><td>36.038%</td></tr><tr><td>Pequeño</td><td>2575</td><td>61.824%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Cesar'></div>");
                
               Morris.Bar({
  element: 'Cesar',
  data: [
    {x: 'Grande', y: 89},
    {x: 'Mediano', y: 1501},
    {x: 'Pequeño', y: 2575}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            if(opcion == 13){
                $("#gd").html("<h4>Creditos en Choco</h4>");
                $("#gd").append("<h5>Total de Creditos = 1699 -> 0.546355%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>3</td><td>0.176%</td></tr><tr><td>Mediano</td><td>223</td><td>13.125%</td></tr><tr><td>Pequeño</td><td>1473</td><td>86.698%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Choco'></div>");
                
               Morris.Bar({
  element: 'Choco',
  data: [
    {x: 'Grande', y: 3},
    {x: 'Mediano', y: 223},
    {x: 'Pequeño', y: 1473}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            
            if(opcion == 14){
                $("#gd").html("<h4>Creditos en Cordoba</h4>");
                $("#gd").append("<h5>Total de Creditos = 11333 -> 3.644403%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>195</td><td>1.720%</td></tr><tr><td>Mediano</td><td>5250</td><td>46.324%</td></tr><tr><td>Pequeño</td><td>5888</td><td>51.954%</td></tr></tbody></table>");
                
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Cordoba'></div>");
                
               Morris.Bar({
  element: 'Cordoba',
  data: [
    {x: 'Grande', y: 195},
    {x: 'Mediano', y: 5250},
    {x: 'Pequeño', y: 5888}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            
            if(opcion == 15){
                $("#gd").html("<h4>Creditos en Cundinamarca</h4>");
                $("#gd").append("<h5>Total de Creditos = 27120 -> 8.721098</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>337</td><td>1.242%</td></tr><tr><td>Mediano</td><td>5833</td><td>21.508%</td></tr><tr><td>Pequeño</td><td>20950</td><td>77.249%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Cundinamarca'></div>");
                
               Morris.Bar({
  element: 'Cundinamarca',
  data: [
    {x: 'Grande', y: 337},
    {x: 'Mediano', y: 5833},
    {x: 'Pequeño', y: 20950}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            if(opcion == 16){
                $("#gd").html("<h4>Creditos en Guania</h4>");
                $("#gd").append("<h5>Total de Creditos = 64 -> 0.0205808%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>0</td><td>0%</td></tr><tr><td>Mediano</td><td>55</td><td>85.937%</td></tr><tr><td>Pequeño</td><td>9</td><td>14.062%</td></tr></tbody></table>");
            $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Guania'></div>");
                
               Morris.Bar({
  element: 'Guania',
  data: [
    {x: 'Grande', y: 0},
    {x: 'Mediano', y: 55},
    {x: 'Pequeño', y: 9}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
});    
            }
            if(opcion == 17){
                $("#gd").html("<h4>Creditos en Guaviare</h4>");
                $("#gd").append("<h5>Total de Creditos = 481 -> 0.154677%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>1</td><td>0.207%</td></tr><tr><td>Mediano</td><td>264</td><td>54.885%</td></tr><tr><td>Pequeño</td><td>216</td><td>44.906%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Guaviare'></div>");
                
               Morris.Bar({
  element: 'Guaviare',
  data: [
    {x: 'Grande', y: 1},
    {x: 'Mediano', y: 264},
    {x: 'Pequeño', y: 216}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            if(opcion == 18){
                $("#gd").html("<h4>Creditos en Huila</h4>");
                $("#gd").append("<h5>Total de Creditos = 24749 -> 7.958645%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>123</td><td>0.496%</td></tr><tr><td>Mediano</td><td>3344</td><td>13.511%</td></tr><tr><td>Pequeño</td><td>21282</td><td>85.991%</td></tr></tbody></table>");
            $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Huila'></div>");
                
               Morris.Bar({
  element: 'Huila',
  data: [
    {x: 'Grande', y: 123},
    {x: 'Mediano', y: 3344},
    {x: 'Pequeño', y: 21282}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
});    
            }
            if(opcion == 19){
                $("#gd").html("<h4>Creditos en La Guajira</h4>");
                $("#gd").append("<h5>Total de Creditos = 1555 -> 0.5%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>4</td><td>0.257%</td></tr><tr><td>Mediano</td><td>1054</td><td>67.781%</td></tr><tr><td>Pequeño</td><td>497</td><td>31.961%</td></tr></tbody></table>");
                $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Guajira'></div>");
                
               Morris.Bar({
  element: 'Guajira',
  data: [
    {x: 'Grande', y: 4},
    {x: 'Mediano', y: 1054},
    {x: 'Pequeño', y: 497}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
});
            }
            
            if(opcion == 20){
                $("#gd").html("<h4>Creditos en Magdalena</h4>");
                $("#gd").append("<h5>Total de Creditos = 3831 -> 1.231951%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>116</td><td>3.027%</td></tr><tr><td>Mediano</td><td>1529</td><td>39.911%</td></tr><tr><td>Pequeño</td><td>2186</td><td>57.060%</td></tr></tbody></table>");
                $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Magdalena'></div>");
                
               Morris.Bar({
  element: 'Magdalena',
  data: [
    {x: 'Grande', y: 116},
    {x: 'Mediano', y: 1529},
    {x: 'Pequeño', y: 2186}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
});
            }
            if(opcion == 21){
                $("#gd").html("<h4>Creditos en Meta</h4>");
                $("#gd").append("<h5>Total de Creditos = 7266 -> 2.336559%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>243</td><td>3.344%</td></tr><tr><td>Mediano</td><td>3011</td><td>41.439%</td></tr><tr><td>Pequeño</td><td>4012</td><td>75.216%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Meta'></div>");
                
               Morris.Bar({
  element: 'Meta',
  data: [
    {x: 'Grande', y: 243},
    {x: 'Mediano', y: 3011},
    {x: 'Pequeño', y: 4012}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            if(opcion ==22){
                $("#gd").html("<h4>Creditos en Nariño</h4>");
                $("#gd").append("<h5>Total de Creditos = 31797 -> 10.225102% </h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>64</td><td>0.201%</td></tr><tr><td>Mediano</td><td>7324</td><td>23.033%</td></tr><tr><td>Pequeño</td><td>24409</td><td>76.765%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Narino'></div>");
                
               Morris.Bar({
  element: 'Narino',
  data: [
    {x: 'Grande', y: 64},
    {x: 'Mediano', y: 7324},
    {x: 'Pequeño', y: 24409}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            if(opcion ==23){
                $("#gd").html("<h4>Creditos en Norte de Santander</h4>");
                $("#gd").append("<h5>Total de Creditos = 1047 -> 3.230858%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>49</td><td>0.487%</td></tr><tr><td>Mediano</td><td>1349</td><td>13.426%</td></tr><tr><td>Pequeño</td><td>8649</td><td>86.085%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='NSantander'></div>");
                
               Morris.Bar({
  element: 'Nsantander',
  data: [
    {x: 'Grande', y: 49},
    {x: 'Mediano', y: 1349},
    {x: 'Pequeño', y: 8649}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            if(opcion == 24){
                $("#gd").html("<h4>Creditos en Putumayo</h4>");
                $("#gd").append("<h5>Total de Creditos = 4614 -> 1.483744%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>4</td><td>0.086%</td></tr><tr><td>Mediano</td><td>1499</td><td>32.488%</td></tr><tr><td>Pequeño</td><td>3111</td><td>67.425%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Putumayo'></div>");
                
               Morris.Bar({
  element: 'Putumayo',
  data: [
    {x: 'Grande', y: 4},
    {x: 'Mediano', y: 1499},
    {x: 'Pequeño', y: 3111}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            
            if(opcion == 25){
                $("#gd").html("<h4>Creditos en Quindio</h4>");
                $("#gd").append("<h5>Total de Creditos = 1813 -> 0.583014%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>53</td><td>2.923%</td></tr><tr><td>Mediano</td><td>704</td><td>38.830%</td></tr><tr><td>Pequeño</td><td>1056</td><td>58.246%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Quindio'></div>");
                
               Morris.Bar({
  element: 'Quindio',
  data: [
    {x: 'Grande', y: 53},
    {x: 'Mediano', y: 704},
    {x: 'Pequeño', y: 1056}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            if(opcion == 26){
                $("#gd").html("<h4>Creditos en Risaralda</h4>");
                $("#gd").append("<h5>Total de Creditos = 5666 -> 1.822040%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>57</td><td>1.006%</td></tr><tr><td>Mediano</td><td>1328</td><td>23.438%</td></tr><tr><td>Pequeño</td><td>4281</td><td>75.555%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Risaralda'></div>");
                
               Morris.Bar({
  element: 'Risaralda',
  data: [
    {x: 'Grande', y: 57},
    {x: 'Mediano', y: 1328},
    {x: 'Pequeño', y: 4281}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            if(opcion == 27){
                $("#gd").html("<h4>Creditos en San Andres y Providencia</h4>");
                $("#gd").append("<h5>Total de Creditos = 32  -> 0.0102904%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>0</td><td>0%</td></tr><tr><td>Mediano</td><td>1</td><td>3.125%</td></tr><tr><td>Pequeño</td><td>31</td><td>96.875%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Andres'></div>");
                
               Morris.Bar({
  element: 'Andres',
  data: [
    {x: 'Grande', y: 0},
    {x: 'Mediano', y: 1},
    {x: 'Pequeño', y: 31}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            if(opcion == 28){
                $("#gd").html("<h4>Creditos en Santander</h4>");
                $("#gd").append("<h5>Total de Creditos = 20288 -> 6.524102%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>388</td><td>1.912%</td></tr><tr><td>Mediano</td><td>2704</td><td>13.328%</td></tr><tr><td>Pequeño</td><td>17196</td><td>84.759%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Santander'></div>");
                
               Morris.Bar({
  element: 'Santander',
  data: [
    {x: 'Grande', y: 388},
    {x: 'Mediano', y: 2704},
    {x: 'Pequeño', y: 17196}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            if(opcion == 29){
                $("#gd").html("<h4>Creditos en Sucre</h4>");
                $("#gd").append("<h5>Total de Creditos = 5106 -> 1.641959</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>29</td><td>0.567%</td></tr><tr><td>Mediano</td><td>2353</td><td>46.083%</td></tr><tr><td>Pequeño</td><td>2724</td><td>53.349%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Sucre'></div>");
                
               Morris.Bar({
  element: 'Sucre',
  data: [
    {x: 'Grande', y: 29},
    {x: 'Mediano', y: 2353},
    {x: 'Pequeño', y: 2724}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            
            if(opcion == 30){
                $("#gd").html("<h4>Creditos en Tolima</h4>");
                $("#gd").append("<h5>Total de Creditos = 26010 -> 8.364150%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>462</td><td>1.776%</td></tr><tr><td>Mediano</td><td>3163</td><td>12.160%</td></tr><tr><td>Pequeño</td><td>22385</td><td>86.063%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Tolima'></div>");
                
               Morris.Bar({
  element: 'Tolima',
  data: [
    {x: 'Grande', y: 462},
    {x: 'Mediano', y: 3163},
    {x: 'Pequeño', y: 22385}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            if(opcion == 31){
                $("#gd").html("<h4>Creditos en Valle del Cauca</h4>");
                $("#gd").append("<h5>Total de Creditos = 11116 -> 3.574621%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>810</td><td>7.286%</td></tr><tr><td>Mediano</td><td>5017</td><td>45.133%</td></tr><tr><td>Pequeño</td><td>5289</td><td>47.580%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Valle'></div>");
                
               Morris.Bar({
  element: 'Valle',
  data: [
    {x: 'Grande', y: 810},
    {x: 'Mediano', y: 5017},
    {x: 'Pequeño', y: 5289}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            if(opcion == 32){
                $("#gd").html("<h4>Creditos en Vaupes</h4>");
                $("#gd").append("<h5>Total de Creditos = 74 -> 0.0237965%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>0</td><td>0%</td></tr><tr><td>Mediano</td><td>66</td><td>89.189%</td></tr><tr><td>Pequeño</td><td>8</td><td>10.810%</td></tr></tbody></table>");
                $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Vaupes'></div>");
                
               Morris.Bar({
  element: 'Vaupes',
  data: [
    {x: 'Grande', y: 0},
    {x: 'Mediano', y: 66},
    {x: 'Pequeño', y: 8}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
});
            }
            
            if(opcion == 33){
                $("#gd").html("<h4>Creditos en Vichada</h4>");
                $("#gd").append("<h5>Total de Creditos = 202 -> 0.064958%</h5>");
                $("#gd").append("<table id='tama' border = 1><thead><tr><th>Tipo de productor</th><th>Total de Creditos</th><th>Porcentaje en el departamento<th></tr></thead>\n\
                <tbody><tr><td>Grande</td><td>6</td><td>2.970%</td></tr><tr><td>Mediano</td><td>81</td><td>40.099%</td></tr><tr><td>Pequeño</td><td>115</td><td>56.930%</td></tr></tbody></table>");
           $("#gd").append("<h5>Grafica</h5>");
                $("#gd").append("<div id='Vichada'></div>");
                
               Morris.Bar({
  element: 'Vichada',
  data: [
    {x: 'Grande', y: 6},
    {x: 'Mediano', y: 81},
    {x: 'Pequeño', y: 115}
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var blue = Math.ceil(150 * row.y / this.ymax);
      return 'rgb(' + blue + ',150,0)';
    }
    else {
      return '#000';
    }
  }
}); 
           }
            
            
            
            
         
            
            
        });  
        
        
Morris.Bar({
  element: 'grafica',
  data: [
    {x: 'Amazonas', y: 3},
    {x: 'Antioquia', y: 28416},
    {x: 'Arauca', y: 1728},
    {x: 'Atlantico', y: 1852},
    {x: 'Bogota', y: 1746},
    {x: 'Bolivar', y: 5586},
    {x: 'Boyaca', y: 27016},
    {x: 'Caldas', y: 10444},
    {x: 'Caqueta', y: 5564},
    {x: 'Casanare', y:4788},
    {x: 'Cauca', y: 24799},
    {x: 'Cesar', y: 4165},
    {x: 'Choco', y: 1699},
    {x: 'Cordoba', y: 11333},
    {x: 'Cundinamarca', y: 27120},
    {x: 'Guainia', y: 64},
    {x: 'Guaviare', y: 481},
    {x: 'Huila', y: 24749},
    {x: 'La Guajira', y: 1555},
    {x: 'Magdalena', y: 3831},
    {x: 'Meta', y: 7266},
    {x: 'Nariño', y: 31797},
    {x: 'Norte de Santander', y: 10047},
    {x: 'Putumayo', y: 4614},
    {x: 'Quindio', y: 1813},
    {x: 'Risaralda', y: 5666},
    {x: 'San Andres y Providencia', y: 32},
    {x: 'Santander', y: 20288},
    {x: 'Sucre', y: 5106},
    {x: 'Tolima', y: 26010},
    {x: 'Valle del Cauca', y: 11116},
    {x: 'Vaupes', y: 74},
    {x: 'Vichada', y: 202}
    
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var red = Math.ceil(255 * row.y / this.ymax);
      return 'rgb(' + red + ',0,0)';
    }
    else {
      return '#000';
    }
  }
});


       
         
      });
      
      
      $("#botonpc").click(function (){
          $("#dep").html("<h3>Creditos a zonas de posconflicto</h3>");
          $("#dep").append("<h5>Los creditos se distribuyerón de la siguiente manera<div id='posconflicto'></div>");
          $("#dep").append("<p>En el 2016 se colocaron creditos a 27 departamentos los cuales tenian zonas en posconflicto</p>");
          $("#dep").append("<h6>Total creditos zonas posconflicto = 97223</h6>");
          $("#dep").append("<h6>31.26% del total de creditos</h6>");
          $("#gd").html("<p></p>");
          
          
          Morris.Bar({
  element: 'posconflicto',
  data: [
    {x: 'Antioquia', y: 14647},
    {x: 'Arauca', y: 1728},
    {x: 'Bolivar', y: 2610},
    {x: 'Boyaca', y: 714},
    {x: 'Caldas', y: 783},
    {x: 'Caqueta', y: 5564},
    {x: 'Casanare', y:2186},
    {x: 'Cauca', y: 17073},
    {x: 'Cesar', y: 2185},
    {x: 'Choco', y: 1480},
    {x: 'Cordoba', y: 1894},
    {x: 'Cundinamarca', y: 1678},
    {x: 'Guaviare', y: 481},
    {x: 'Huila', y: 3036},
    {x: 'La Guajira', y: 1237},
    {x: 'Magdalena', y: 887},
    {x: 'Meta', y: 4248},
    {x: 'Nariño', y: 8342},
    {x: 'Norte de Santander', y: 4721},
    {x: 'Putumayo', y: 3078},
    {x: 'Risaralda', y: 465},
    {x: 'Santander', y: 3320},
    {x: 'Sucre', y: 1200},
    {x: 'Tolima', y: 8416},
    {x: 'Valle del Cauca', y: 5112},
    {x: 'Vaupes', y: 74},
    {x: 'Vichada', y: 64}
    
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var red = Math.ceil(255 * row.y / this.ymax);
      return 'rgb(' + red + ',0,0)';
    }
    else {
      return '#000';
    }
  }
});
          
          
      });
      
      $("#finalidad").click(function (){
         $("#dep").html("<h3>Finalidad de los creditos</h3>");
         $("#dep").append("<p>Los mas de 300000  creditos  tuvierón inversión en diferentes actividades como podemos observar en la siguiente grafica</p><div id='destino'></div>");
         $("#dep").append("<table border='1'><thead><tr><th>Finalidad</th><th>Creditos</th></tr></thead><tbody><tr><td>Actividades Rurales</td><td>716</td></tr><tr><td>Adecuacion de Tierras</td><td>17</td></tr><tr><td>Comercialización</td><td>7251</td></tr><tr><td>Compra de Animales</td><td>59101</td></tr><tr><td>Consolodación de Pasivos</td><td>38620</td></tr><tr><td>Infraestructura</td><td>16157</td></tr><tr><td>Maquinaria y Equipo</td><td>4442</td></tr><tr><td>Otras Actividades</td><td>1390</td></tr><tr><td>Producción</td><td>17563</td></tr><tr><td>Servicios de Apoyo</td><td>2246</td></tr><tr><td>Siembras</td><td>91321</td></tr><tr><td>Sostenimiento</td><td>72146</td></tr></tbody></table>");
         $("#gd").html("<p></p>");
         
          Morris.Bar({
  element: 'destino',
  data: [
    {x: 'Actividades Rurales', y: 716},
    {x: 'Adecuacion de Tierras', y: 17},
    {x: 'Comercialización', y: 7251},
    {x: 'Compra de Animales', y: 59101},
    {x: 'Consolidación de Pasivos', y: 38620},
    {x: 'Infraestructura', y: 16157},
    {x: 'Maquinaria y Equipo', y:4442},
    {x: 'Otras Actividades', y: 1390},
    {x: 'Producción', y: 17563},
    {x: 'Servicios de Apoyo', y: 2246},
    {x: 'Siembras', y: 91321},
    {x: 'Sostenimiento', y: 72146}
    
  ],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Creditos'],
  barColors: function (row, series, type) {
    if (type === 'bar') {
      var red = Math.ceil(100 * row.y / this.ymax);
      return 'rgb(' + red + ',0,100)';
    }
    else {
      return '#000';
    }
  }
});
         
      });
      
       
     
     $("#productor").click(function (){
         
         $("#dep").html("<h3>Tipos de Productor</h3>");
         $("#dep").append("<p>Segun el Ministerio de Agricultura y Desarrollo Rural establece 3 tipos de productores: \n\</p>");
         $("#dep").append("<p>*Pequeño Productor cuyos activos son menores a 193 millones de pesos aproximadamente</p>");
         $("#dep").append("<p>*Mediano Productor cuyos activos esten entre 193 millones y los 2950 millones de pesos aproximadamente</p>");
         $("#dep").append("<p>*Gran Productor cuyos activos sean mayores a los 2950 millones de pesos aproximadamente</p>");
         $("#dep").append("<h5>Deacuerdo a esta clasificación los creditos se ditribuyeron de la siguiente forma</h5>");
         $("#dep").append("<table border='1'><thead><tr><th>Tipo de Productor</th><th>Creditos</th><th>%</th></tr></thead><tbody><tr><td>Pequeño</td><td>234235</td><td>75.33%</td></tr><tr><td>Mediano</td><td>70527</td><td>22.68%</td></tr><tr><td>Grande</td><td>6208</td><td>2%</td></tr></tbody></table><div id='produ'></div>");
         
      Morris.Donut({
  element: 'produ',
  data: [
    {value: 234235, label: 'Pequeño', formatted: '234235 creditos' },
    {value: 70527, label: 'Mediano', formatted: '70527 creditos' },
    {value: 6208, label: 'Grande', formatted: '6208 creditos' },
 
  ],
  formatter: function (x, data) { return data.formatted; }
});
         
        
         
     });
     
    
      
    
    });
    
  
 