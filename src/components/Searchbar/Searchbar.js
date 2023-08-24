import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) =>{
    return  <header className={css.searchbar}>
                 <form className={css.form} onSubmit={onSubmit}>
                    <button className={css.button} type="submit">
                        <span className={css.button_label}>Search</span>
                    </button>

                    <input
                        className={css.input}
                        type="text"
                        name="query"
                        placeholder="Search images and photos"
                    />        
                </form>
            </header>
}