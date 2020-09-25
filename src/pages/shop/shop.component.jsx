import React, { useEffect } from "react";
import {connect} from 'react-redux';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.util'
import CollectionOverview from '../../components/collection-overview/collectionOverview';
import {update_shop_data, requestShopData} from '../../actions/shop_actions';
import withLoader from "../../components/withLoader/withLoader";

// Create a component wrapped with HOC.
const CollectionOverviewWithLoader = withLoader(CollectionOverview);

const ShopPage = ({update_shop_data, requestShopData, loading}) => {
  // const unsubscribeFromSnapshot = null;
  useEffect(() => {
    console.log('Im called');
    requestShopData();
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const shopData = convertCollectionSnapshotToMap(snapshot);
      update_shop_data(shopData);
    })
  }, []);

  // Method 1 - Without HOC
  // const renderShopComponents = () => {
  //   if(loading) {
  //     return <div> Loading... </div>
  //   } else {
  //     return (<div>
  //     SHOP PAGE
  //     <CollectionOverview />
  //   </div>)
  //   }
  // }

  // Method 2 - with HOC
  const renderShopComponents = () => {
      return <CollectionOverviewWithLoader loading={loading} />
  }
  return (
    <>
      {renderShopComponents()}
    </>
  )
}

const mapStateToProps = (state) => {
  return {loading: state.shop.loading}
}
const mapDispatchToProps = (dispatch) => {
  return {
    update_shop_data: (shopData) => dispatch(update_shop_data(shopData)),
    requestShopData: () => dispatch(requestShopData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage); 



// import React from "react";
// import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.util'
// import CollectionOverview from '../../components/collection-overview/collectionOverview';

// class ShopPage extends React.Component {
  
//   unsubscribeFromSnapshot = null;

//   componentDidMount() {
//     console.log('Im called');
//     const collectionRef = firestore.collection('collections');
//     collectionRef.onSnapshot(async snapshot => {
//       convertCollectionSnapshotToMap(snapshot);
//     })
//   }

//   render() {
//     return (
//       <div>
//         SHOP PAGE
//         <CollectionOverview />
//       </div>
//     );
//   }
// }

// export default ShopPage; 