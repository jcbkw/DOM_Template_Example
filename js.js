$(function () {
    
    function renderPage (container, content, layoutHtml) {
        
        var layoutTpl = Handlebars.compile(layoutHtml);
        
        container.append(layoutTpl(content));
        
    }
    
    function renderList (container, data, contactHtml) {
        
        var ul = container.find('.plain-list'),
            liTpl = Handlebars.compile(contactHtml);
        
        data.forEach(function (person) {
            
            ul.append(liTpl(person));
            
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