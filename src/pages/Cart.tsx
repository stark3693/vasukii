import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Trash2, ShoppingBag, CreditCard, Check, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice, paymentMethod, setPaymentMethod } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate order processing
    setTimeout(() => {
      // Create order object with cart items and details
      const order = {
        id: `ORD-${Math.floor(Math.random() * 100000)}`,
        items: [...cartItems],
        totalPrice: getTotalPrice(),
        paymentMethod: paymentMethod,
        date: new Date().toISOString(),
        status: "Processing",
        estimatedDelivery: getEstimatedDeliveryDate(),
        paymentStatus: paymentMethod === "cod" ? "Pending" : "Paid"
      };

      // Get existing orders from localStorage or initialize empty array
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      
      // Add new order to beginning of orders array
      const updatedOrders = [order, ...existingOrders];
      
      // Store updated orders in localStorage
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      
      setIsProcessing(false);
      setShowConfirmation(true);
    }, 1500);
  };

  const handleFinishOrder = () => {
    toast.success("Order placed successfully!", {
      description: "Your order has been placed and is being processed."
    });
    clearCart();
    navigate('/orders');
  };

  // Calculate estimated delivery date (3-5 days from current date)
  const getEstimatedDeliveryDate = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + Math.floor(Math.random() * 3) + 3); // Random 3-5 days
    return deliveryDate.toISOString();
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container-custom pt-32 pb-16 flex flex-col items-center justify-center">
          <div className="text-center max-w-md w-full bg-white p-8 rounded-sm shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="heading-lg mb-2">Payment Successful</h1>
            <p className="mb-6 text-gray-600">
              Your order has been placed successfully. {paymentMethod === "cod" ? 
                "You will pay when your order is delivered." : 
                "Your online payment has been processed."}
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Estimated delivery: 3-5 business days
            </p>
            <Button 
              onClick={handleFinishOrder} 
              className="w-full bg-boutique-taupe hover:bg-boutique-taupe/90"
            >
              View My Orders
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container-custom pt-32 pb-16 flex flex-col items-center justify-center">
          <div className="text-center">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h1 className="heading-lg mb-4">Your Cart is Empty</h1>
            <p className="mb-8 text-gray-600">Explore our collection and add some beautiful items to your cart.</p>
            <Link to="/products">
              <Button className="bg-boutique-taupe hover:bg-boutique-taupe/90">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container-custom pt-32 pb-16">
        <h1 className="heading-lg mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-sm shadow p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Product</TableHead>
                    <TableHead className="w-[300px]">Details</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}>
                      <TableCell>
                        <Link to={`/products/${item.id}`}>
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-16 h-20 object-cover rounded-sm"
                          />
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link to={`/products/${item.id}`} className="font-medium hover:text-boutique-taupe">
                          {item.name}
                        </Link>
                        <div className="text-sm text-gray-500 mt-1">
                          {item.selectedColor && <span className="mr-2">Color: {item.selectedColor}</span>}
                          {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                        </div>
                      </TableCell>
                      <TableCell>${item.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <div className="flex items-center border border-gray-300 rounded-sm w-24">
                          <button
                            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                            onClick={() => item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="px-2 flex-grow text-center">{item.quantity}</span>
                          <button
                            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <Trash2 size={18} />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="flex justify-end mt-6">
                <Button 
                  variant="outline" 
                  onClick={clearCart}
                  className="text-gray-600"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-sm shadow p-6 sticky top-24">
              <h2 className="text-xl font-serif mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                {cartItems.map((item) => (
                  <div key={`${item.id}-summary-${item.selectedColor}-${item.selectedSize}`} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} x {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 my-4"></div>
              
              <div className="flex justify-between font-medium text-lg mb-6">
                <span>Total</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Payment Method</h3>
                <RadioGroup 
                  value={paymentMethod} 
                  onValueChange={setPaymentMethod}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2 border p-3 rounded-sm">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="flex items-center">
                      <DollarSign className="mr-2 h-4 w-4" />
                      <span>Cash on Delivery</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border p-3 rounded-sm">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online" className="flex items-center">
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Online Payment</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mb-4 text-sm text-gray-600">
                <p>Estimated delivery: 3-5 business days</p>
              </div>
              
              <Button 
                className="w-full bg-boutique-taupe hover:bg-boutique-taupe/90" 
                onClick={handlePlaceOrder}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : "Place Order"}
              </Button>
              
              <div className="mt-4 text-center">
                <Link to="/products" className="text-boutique-taupe text-sm hover:underline">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
