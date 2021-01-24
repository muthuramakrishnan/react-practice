import './App.css';
import PriceCard from './PriceCard/PriceCard';

function App() {

  var data = [
    {
      type : 'free',
      price : '0',
      currency: '$',
      period: 'month',
      features: [
        {
          title: 'single user'
        },
        {
          title: '5gb storage'
        }
      ]
    },
    {
      type : 'Premium',
      price : '10',
      currency: 'KSD',
      period: 'month',
      features: [
        {
          title: 'single user',
          isBold: 'true'
        },
        {
          title: '5gb storage',
          isDisabled: 'true'
        }
      ]
    },
    {
      type : 'VIP',
      price : '10',
      currency: '$',
      period: 'month',
      features: [
        {
          title: 'single user'
        },
        {
          title: '5gb storage'
        }
      ]
    }
  ]
  return (
  <>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          
        {
            
            data.map((element) => {
              return (<div className="col-lg-4">
                <PriceCard data = {element}></PriceCard>
              </div>);
            })
          }
        </div>
      </div>
    </section>
  </>
  );
}

export default App;
