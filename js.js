$(function () {
    
    function renderPage (container, content, layoutHtml) {
        
        container.append(layoutHtml);
        
        container.find('.mh-title').text(content.title);
        container.find('.main-content').prepend(content.subtitle);
        
    }
    
    function renderList (container, data, contactHtml) {
        
        var ul = container.find('.plain-list'),
            liTpl = $(contactHtml);
        
        data.forEach(function (person) {
            
            var li = liTpl.clone();
            
            li.find('.col-1').text(person.firstname);
            li.find('.col-2').text(person.lastname);
            li.find('.col-3').text(person.phone);
            
            ul.append(li);
            
        });
        
    }
    
    function getServerFiles (callback) {
        
        $.get('layout.html', function (layoutHtml) {
            
            $.get('contact.html', function (contactHtml) {
                
                $.get('data.json', function (data) {
                    
                    $.get('content.json', function (content) {
                    
                        callback(data, content, layoutHtml, contactHtml);
                    
                    });
                    
                });
                
            });
            
        });
        
    }
    
    getServerFiles(function (data, content, layoutHtml, contactHtml) {
        
        var body = $('body');
        
        renderPage(body, content, layoutHtml);
        renderList(body, data, contactHtml);
        
    });
        
});