import dbConnect from '../../../util/mongo';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  const { method, cookies } = req;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Referer, sec-ch-ua, sec-ch-ua-mobile, sec-ch-ua-platform, token, User-Agent, Authorization'
  );

  const token = cookies.token;

  dbConnect();

  if (method === 'GET') {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === 'POST') {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json('Not authenticated');
    }
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
