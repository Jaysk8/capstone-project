const Category = ({ category }) => {
    return (
        <div className="categories d-flex flex-wrap justify-content-center">
            {category.map(item => (
                <div className="category-item" key={item.id}>
                    <img src={item.image} alt="decks" className="category-image img-fluid"/>
                    <button className="category-btn">{item.name}</button>
                </div>
            ))}
        </div>
    )
}

export default Category
