import React, { Component } from "react";

import DztImageGalleryComponent from "reactjs-image-gallery";

class Gallery extends Component {
  render() {
    var data = [
      {
        url: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "",
        thumbUrl:
          "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        url: "https://images.pexels.com/photos/6508358/pexels-photo-6508358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "",
        thumbUrl:
          "https://images.pexels.com/photos/6508358/pexels-photo-6508358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        url: "https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "",
        thumbUrl:
          "https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        url: "https://images.pexels.com/photos/7513177/pexels-photo-7513177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "",
        thumbUrl:
          "https://images.pexels.com/photos/7513177/pexels-photo-7513177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        url: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "",
        thumbUrl:
          "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "",
        thumbUrl:
          "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        url: "https://images.pexels.com/photos/7031711/pexels-photo-7031711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "",
        thumbUrl:
          "https://images.pexels.com/photos/7031711/pexels-photo-7031711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        url: "https://images.pexels.com/photos/6523282/pexels-photo-6523282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "",
        thumbUrl:
          "https://images.pexels.com/photos/6523282/pexels-photo-6523282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ];

    return (
      <section className="gallery">
        <h2 className="gallery-title cursive">Houses We've Cleaned</h2>
        <DztImageGalleryComponent images={data} />
      </section>
    );
  }
}

export default Gallery;
