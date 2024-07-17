export const BlogSkeleton = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="grid grid-cols-12 pt-12 w-full px-20">
                    <div className="col-span-8">
                        <div className="h-11 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                        <div className="mt-2 h-4 bg-gray-200 rounded-full max-w-[200px] mb-2.5"></div>
                        <div className="mt-4 h-4 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
                    </div>
                    <div className="col-span-4">
                        <div className="h-6 bg-gray-200 rounded-full max-w-[60px]"></div>
                        <div className="mt-3 h-11 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                </div>
                </div>
            </div>
        </div> 
    );
};
