module.exports = function(bh) {

    bh.match('link', function(ctx, json) {
        ctx
            .tag('a')
            .mix({ elem : 'control' }); // satisfy interface of `control`

        var url = typeof json.url === 'object'? // url could contain bemjson
                bh.apply(json.url) :
                json.url,
            attrs = {},
            tabIndex;

        if(ctx.mod('disabled')) {
            ctx.js(url? { url : url } : true);
            attrs['aria-disabled'] = true;
        } else {
            if(url) {
                attrs.href = url;
                tabIndex = json.tabIndex;
            } else {
                tabIndex = json.tabIndex || 0;
            }
            ctx.js(true);
        }

        typeof tabIndex === 'undefined' || (attrs.tabindex = tabIndex);

        json.title && (attrs.title = json.title);
        json.target && (attrs.target = json.target);
        json.id && (attrs.id = json.id);
        json.name && (attrs.name = json.name);
        json.ariaLabel && (attrs['aria-label'] = json.ariaLabel);
        json.ariaLabelledby && (attrs['aria-labelledby'] = json.ariaLabelledby);

        ctx.attrs(attrs);
    });

};
