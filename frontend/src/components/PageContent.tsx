import { PageContentProps } from "../interfaces/PageContentProps";

const PageContent = (items: PageContentProps) => {
    return (
        <div className='m-3 h-30/31'>
            <div className="bg-white min-h-full max-h-fit p-5">
                {items.element}
            </div>
        </div>
    )
}

export default PageContent;