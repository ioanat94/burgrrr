import dbConnect from '../../../util/mongo';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req;
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
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === 'PUT') {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json('Not authenticated');
    }
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { $set: req.body },
        {
          new: true,
        }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === 'DELETE') {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json('Not authenticated');
    }
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json('Deleted successfully');
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
