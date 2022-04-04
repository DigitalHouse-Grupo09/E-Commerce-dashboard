const properties = {
    1: {
        icon: 'fas fa-book',
        type: 'light'
    },
    2: {
        icon: 'fas fa-brain',
        type: 'secondary'
    },
    3: {
        icon: 'fab fa-superpowers',
        type: 'secondary'
    },
    4: {
        icon: 'fas fa-hamburger',
        type: 'light'
    },
    5: {
        icon: 'fas fa-baby',
        type: 'light'
    },
    6: {
        icon: 'fas fa-building',
        type: 'secondary'
    },
    7: {
        icon: 'fas fa-syringe',
        type: 'secondary'
    },
    8: {
        icon: 'fas fa-route',
        type: 'light'
    },
    9: {
        icon: 'fas fa-calendar',
        type: 'light'
    }
};

export default function CategoryItemList ({ category, index }) {
    return (
        <div className="col-lg-6 mt-3">
            <div className={`btn btn-${(properties[category.id] && properties[category.id].type) || 'secondary'} btn-icon-split w-100`}>
                <span className="icon text-gray-600 d-flex align-items-center">
                    <i className={(properties[category.id] && properties[category.id].icon) || properties[1].icon}></i>
                </span>
                <span className="text w-100"><b>{category.description}</b><br/>productos <small>({category.count})</small></span>
            </div>
        </div>
    );
}
