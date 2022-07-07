import dbConnect from '../../../util/mongo';
import Order from '../../../models/Order';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
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

  await dbConnect();

  if (method === 'GET') {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === 'PUT') {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
