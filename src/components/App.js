import { Component } from 'react';
import { fetchImages } from 'api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loading } from './Loader/Loader';

import css from './App.module.css';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    total: 1,
  };

  changeQuery = newQuery => {
    if (!newQuery.trim()) {
      console.error("The 'Search images and photos' field cannot be empty. Enter your search query.");
      return;
    }
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
      loading: false,
      total: 1,
    });
  };

  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true });

        const dividerPosition = query.indexOf('/');
        const actualQuery = query.slice(dividerPosition + 1);
        const data = await fetchImages(actualQuery, page);
        const { totalHits, hits } = data;

        if (hits.length > 0) {
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            total: totalHits,
          }));
        } else {
          console.warn("Oops! We couldn't find any images for your search. Please give it another try.");
        }
      } catch (error) {
        console.error("Oops! Trouble fetching images: ", error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onSubmit = evt => {
    evt.preventDefault();
    this.changeQuery(evt.target.elements.query.value);
    evt.target.reset();
  };

  render() {
    const { images, loading, total, page } = this.state;
    const limit = Math.ceil(total / 12);

    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.onSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {loading && <Loading />}
        {images.length > 0 && page !== limit && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}