import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Currency } from '../utils/Currency';

interface OrderDetailProps {
  shippingAddress: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    village: string;
    wards: string;
  };
  products: {
    image: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  onClose: () => void;
}

const OrderDetail = ({
  shippingAddress,
  products,
  onClose,
}: OrderDetailProps) => {
  return (
    <Dialog open={true} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Typography variant="h5" fontWeight="bold">
          Hóa đơn
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="bold">
              Thông tin giao hàng
            </Typography>
            <Typography variant="body1" gutterBottom>
              Họ và tên: {shippingAddress.fullName}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: {shippingAddress.email}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Số điện thoại: {shippingAddress.phone}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Địa chỉ:{' '}
              {`${shippingAddress.address}, ${shippingAddress.wards}, ${shippingAddress.village}, ${shippingAddress.city}`}
            </Typography>
          </Grid>
          {products.map((item, key) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`../images/products/${item.image}`}
                  alt={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Số lượng: {item.quantity}
                  </Typography>
                  <Typography variant="body1" color="primary" fontWeight="bold">
                    {Currency(item.price)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Đóng
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDetail;
