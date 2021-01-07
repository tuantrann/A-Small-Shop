## Summary
A small project for me to learn more about NodeJS and Express. It is a small shop system that have a display interface with different products that can be added to Cart and then Order with Stripe payment system. There is also authetication and authorization in place for some features.

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* NodeJS at [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### Installation

1. Get a free API Key at [https://stripe.com/](https://stripe.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/tuantrann/A-Small-Shop.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Install dotenv to store STRIPE_KEY
   ```sh
   npm install dotenv
   ```
5. Create and enter your key in `.env`
   ```.env
   STRIPE_KEY = YOUR_KEY
   ```



<!-- USAGE EXAMPLES -->
## Usage
We can sign up and log in to have authorization to add product, delete product, add to cart and order it. 
![SignUp](https://user-images.githubusercontent.com/51528851/103881612-4fdff980-50a0-11eb-83b2-ae667d11b3ac.PNG)
Here is the display view 
![LogInAuthenticated](https://user-images.githubusercontent.com/51528851/103881905-b36a2700-50a0-11eb-8802-bbbb8f6045fc.PNG)
Adding more products
![Add Product](https://user-images.githubusercontent.com/51528851/103881961-c54bca00-50a0-11eb-8a9d-30b7e983b523.PNG)
Then Add To Cart and Order It with Stripe
![AddToCart](https://user-images.githubusercontent.com/51528851/103882024-dac0f400-50a0-11eb-8ae8-25977ac14bbd.PNG)



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Tuan Tran - [https://www.linkedin.com/in/tuan-tran26/](https://www.linkedin.com/in/tuan-tran26/) - tmtran38@uh.edu

Project Link: [https://github.com/tuantrann/A-Small-Shop](https://github.com/tuantrann/A-Small-Shop)

