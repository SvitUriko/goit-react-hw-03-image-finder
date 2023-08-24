import { ThreeDots } from 'react-loader-spinner';

export const Loading = () => {
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#ec44d0"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: '0 auto' }}
        wrapperClassName=""
        visible={true}
      />
    );
  };