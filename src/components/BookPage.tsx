import React from "react";

interface BookPageProps {
  image: string;
}

const BookPage: React.FC<BookPageProps> = ({ image }) => {
  return (
    <div className="img-container">
      <img src={image} alt="Book page" className="book-page-image" />
    </div>
  );
};

export default BookPage;
