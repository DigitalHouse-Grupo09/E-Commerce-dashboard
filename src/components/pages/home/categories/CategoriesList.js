import CategoryItemList from './CategoryItemList';

export default function CategoriesList ({ categories, count }) {
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categories</h6>
            </div>
            <div className="card-body">
                <div className="row">
                    {categories.map((category, index) => <CategoryItemList key={index} category={category} index={index} />)}
                </div>
            </div>
        </div>
    );
}
