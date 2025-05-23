import { OrderSummaryData } from "../pages/CheckoutPage";
import Payment from "payment";
import { useRef } from "react";

type OrderSummaryProps = {
  data: OrderSummaryData;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({
  data: { items, formData, totalPrice },
}) => {
  const issuer = Payment.fns.cardType(formData.number);
  const recipt = useRef<HTMLDivElement>(null);

  return (
    <div className="fixed top-0 bottom-0 left-0 overflow-auto w-screen z-[50] bg-gray-200">
      <div
        ref={recipt}
        className="w-full p-4 sm:p-10 flex flex-col items-center justify-center"
      >
        <div
          id="toPdf"
          className="w-[min(100%,720px)] min-h-screen flex flex-col md:flex-row shadow-xl rounded-xl overflow-hidden"
        >
          <div className="h-auto w-full md:w-[40%] py-3 px-1 bg-white flex items-center ">
            <div className="flex w-full h-fit flex-wrap gap-2 items-center justify-center">
              {items.length === 1 ? (
                <div className="w-full p-2 border border-primary rounded-lg">
                  <img
                    src={items[0].imageUrl}
                    alt={items[0].title}
                    className="object-contain w-full"
                  />
                </div>
              ) : (
                items.map((item) => {
                  return (
                    <div className="w-24 p-2 border border-primary rounded-lg">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="object-contain w-full"
                      />
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="h-auto flex-1 bg-primary p-4 text-white flex flex-col items-center ">
            <span className="text-3xl sm:text-4xl font-semibold underline underline-offset-4">
              Order Summary
            </span>
            <div className="flex flex-col justify-between h-full  gap-1 mt-4 max-w-[350px] w-full pb-8">
              {/* Price Details */}
              <div className="">
                {items.map((item) => {
                  return (
                    <div className="flex items-center justify-between">
                      <span>
                        {item.qty} x{" "}
                        <span className="capitalize">{item.title}</span>
                      </span>
                      <span className="font-semibold">Fcfa {item.price}</span>
                    </div>
                  );
                })}

                <div className="flex items-center justify-between mt-4">
                  <span>Delivery</span>
                  <span className="font-semibold">Fcfa 0.0</span>
                </div>
                <div className="flex items-center justify-between ">
                  <span>Tax</span>
                  <span className="font-semibold">Fcfa 0.0</span>
                </div>
                <div className="flex items-center justify-between mt-5 pt-2 border-t border-white">
                  <span>Total</span>
                  <span className="font-semibold">Fcfa {totalPrice}</span>
                </div>
              </div>

              {/* Person Details */}

              <table>
                <tr>
                  <td>Recipent</td>
                  <td>:</td>
                  <td>
                    {formData.firstName} {formData.lastName}
                  </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>:</td>
                  <td>{formData.address}</td>
                </tr>
              </table>

              {/* Payment Details */}

              <table>
                <tr>
                  <td>Tracking</td>
                  <td>:</td>
                  <td>8008XXXX8008</td>
                </tr>
                <tr>
                  <td>Payment</td>
                  <td>:</td>
                  <td>
                    <span className="uppercase">{issuer}</span> ending with{" "}
                    <span>{formData.number.slice(-4)}</span>
                  </td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>{formData.name}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
