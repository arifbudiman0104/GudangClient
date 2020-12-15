function show() {
    let view = document.getElementById('view');
    let urls = 'http://localhost:8080/Gudang/webresources/gudang.barang';
    $.ajax({
        url: urls,
        metodh: 'GET',
        success: function (xml) {
            let table = xml2html(xml);
            view.innerHTML = table;
        },
        fail: function (e) {
            alert('error');
        }
    })
    //view.innerHTML = "Show here";
}
function xml2html(xml) {
    let sdata = xml.getElementsByTagName('barang').length;
    let table = "<table border='1'>";
    table += "<tr> <th>IDB</th> <th>Nama Barang</th> <th>Jumlah</th> </tr>";
    for (row = 0; row < sdata; row++) {
        let idb = xml.getElementsByTagName("idb")[row].childNodes[0].nodeValue;
        let namabarang = xml.getElementsByTagName("namabarang")[row].childNodes[0].nodeValue;
        let jumlah = xml.getElementsByTagName("jumlah")[row].childNodes[0].nodeValue;
        table += '<tr> <td>' + idb + '</td>  <td>' + namabarang + '</td>  <td>' + jumlah + '</td> </tr>'
    }
    table += "</table>";
    return table;
}

function find() {
    let view = document.getElementById('view');
    view.innerHTML = "Find here";
}
function edit() {
    let view = document.getElementById('view');
    view.innerHTML = "Edit here";
}
function del() {
    let view = document.getElementById('view');
    view.innerHTML = "Delete here";
}