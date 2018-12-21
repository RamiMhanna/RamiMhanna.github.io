function add_para(){
    let p = document.createElement('p');
    let pcontent = document.createTextNode("Thia is new line.");
    p.appendChild(pcontent);
    p.className = 'new_line';
    document.getElementById('bodi').appendChild(p);
}

function list_element(){
    let li = document.createElement('li');
    let li_text = document.createTextNode('This is a list Element.');
    li.appendChild(li_text);
    return li;
}

function list_element_emphasised(x,y){
    let li = document.createElement('li');
    let li_text = document.createTextNode(x);
    let em = document.createElement('em');
    let em_text = document.createTextNode(y);
    em.appendChild(em_text);
    li.appendChild(li_text);
    li.appendChild(em);
    return li;
}

function unordered_list(){
    let b = document.getElementById('bodi');
    let ul = document.createElement('ul');
    b.appendChild(ul);
    ul.appendChild(list_element());
    ul.appendChild(list_element_emphasised('Hello I am  ' , ' Rami'));
    ul.appendChild(list_element());
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('add_new').addEventListener('click', function(event) {
       // let p = document.createElement('p');
       // let pcontent = document.createTextNode("Thia is new line.");
       // p.appendChild(pcontent)
       // p.className = 'new_line';
       // document.getElementById('bodi').appendChild(p);
        unordered_list();

    });
});
