$(function () {
    
    var templates = $('[templates]').remove();
    
    function renderPage () {
        
        templates.find('.mh-title').text('Too cool');
        templates.find('.main-content').text('For school');
        
        $('body').append(templates.find('[page]').html());
        
    }
    
    function renderList () {
        
        $.get('data.json', function (data) {
            
            var ul = templates.find('.plain-list'),
                liTpl = templates.find('.pl-item');
            
            data.forEach(function (person) {
                
                var li = liTpl.clone();
                
                li.find('.col-1').text(person.firstname);
                li.find('.col-2').text(person.lastname);
                li.find('.col-3').text(person.phone);
                
                ul.append(li);
                
            });
            
            $('.main-content').append(ul);
            
        });
        
    }
    
    renderPage();
    renderList();
    
});