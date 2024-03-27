import { ImageIcon } from "./ImageIcon";

/**
 * Displays a mock product with Name, SKU and description
 * @returns 
 */
function MockProduct() {
    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col text-center">
                <h1 className="text-3xl font-bold">Product Name</h1>
                <p className="text-gray-400 text-sm">product sku</p>
            </div>

            <div className="flex flex-col w-72 h-80 bg-gray-300 items-center justify-center rounded-md mt-5">
                
                <ImageIcon/>
            </div>

            <div className="flex flex-row overflow-x-scroll space-x-3 mt-5">
                {/* will generate 4 placeholder rectangles to be filled with product image thumbnails */}
                {[...Array(4).keys()].map((_, index) => {
                    return(
                        <div key={index} className="flex flex-col w-14 h-10 bg-gray-300 items-center justify-center first:border-b-4 border-blue-400 hover:cursor-pointer">
                            
                            
                            <ImageIcon/>
                        </div>
                    )
                })}
            </div>

            <div className="text-center text-sm mt-5">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hic nihil fuit, quod quaereremus. Si qua in iis corrigere voluit, deteriora fecit. Venit ad extremum; Videsne quam sit magna dissensio?
                Tuo vero id quidem, inquam, arbitratu. Non est igitur summum malum dolor. Nunc omni virtuti vitium contrario nomine opponitur. Bork Quam nemo umquam voluptatem appellavit, appellat; At iam decimum annum in spelunca iacet.
                </p>
            </div>
            
        </div>
    );
}


export default MockProduct;