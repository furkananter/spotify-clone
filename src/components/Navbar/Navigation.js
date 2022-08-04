import { Icon } from 'Icons';

function Navigation() {
    return (
        <nav>
            <button>
                <Icon name="previous" size={22} />
            </button>
            <button>
                <Icon name="forward" size={22} />
            </button>
        </nav>
    )
}

export default Navigation;
