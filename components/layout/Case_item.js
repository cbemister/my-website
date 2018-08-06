import P from "./Paragraph"

export default ({headline, image, description, href, layout}) =>

        <div data-image={image && image} className={layout ? "case-item " + layout  : "case-item" } >
            {/* <span className="button-image-overlay">View project</span> */}
            {headline && <h3 className="case-item-header">{headline}</h3>}  
            <P description={description}/>
            {href && <a href={href} target="_new" className="case-item-link"></a>} 
            
        </div>
