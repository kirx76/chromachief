// import UiStore from "./UiStore";
// import AuthStore from "./AuthStore";
// import ResourceStore from "./ResourseStore";
// import DonorCardStore from "./DonorCardStore";
// import PictureStore from "./PictureStore";
// import HonorStore from "./HonorStore";
// import PlannedStore from "./PlannedStore";
// import BloodStationStore from "./BloodStationStore";
// import AdditionalPlacesStore from "./AdditionalPlacesStore";
// import WidgetStore from "./WidgetStore";
// import StoriesStore from "./StoriesStore";
// import SelectedCityStore from "./SelectedCityStore";
// import SpinnerStore from "./SpinnerStore";
// import TokenStore from "./TokenStore";
// import init_axios from "../utils/Axios";
// import OauthStore from "./OauthStore";
// import BonusStore from "./BonusStore";

import init_axios from "../utils/Axios";
import TokenStore from "./TokenStore";
import AuthStore from "./AuthStore";
import PostsStore from "./PostsStore";

class RootStore {
  // uiStore: UiStore;
  // authStore: AuthStore;
  // donationStore: ResourceStore;
  // citiesStore: ResourceStore;
  // donorCardStore: DonorCardStore;
  // bloodStationsStore: BloodStationStore;
  // pictureStore: PictureStore;
  // honorStore: HonorStore;
  // plannedStore: PlannedStore;
  // additionalPlacesStore: AdditionalPlacesStore;
  // widgetStore: WidgetStore;
  // storiesStore: StoriesStore;
  // bloodStationsNeedStore: ResourceStore;
  // interestingBlockStore: ResourceStore;
  // waitingDonorNowStore: ResourceStore;
  // mainPageStore: ResourceStore;
  // selectedCityStore: SelectedCityStore;
  // spinnerStore: SpinnerStore;
  // tokenStore: TokenStore;
  // oauthStore: OauthStore;
  // bonusStore: BonusStore;

  $axios: any;
  tokenStore: TokenStore;
  authStore: AuthStore;
  postsStore: PostsStore;

  constructor(initialData: RootStore) {
    this.tokenStore = new TokenStore(initialData?.tokenStore);
    this.$axios = init_axios(this.tokenStore)
    // this.uiStore = new UiStore(initialData?.uiStore);
    // this.selectedCityStore = new SelectedCityStore(initialData?.selectedCityStore);
    this.authStore = new AuthStore(this.$axios, initialData?.authStore, this.tokenStore);
    this.postsStore = new PostsStore('/posts/', this.$axios);
    // this.donationStore = new ResourceStore('/api/donations/', this.$axios);
    // this.plannedStore = new PlannedStore('/api/donation_plan/', this.$axios);
    // this.citiesStore = new ResourceStore('/api/cities/', this.$axios);
    // this.bloodStationsStore = new BloodStationStore('/api/blood_stations/', this.$axios);
    // this.donorCardStore = new DonorCardStore('/api/auth/donor_card/', this.$axios);
    // this.pictureStore = new PictureStore('/api/picture/', this.$axios)
    // this.honorStore = new HonorStore('/api/donations/honor/', this.$axios)
    // this.additionalPlacesStore = new AdditionalPlacesStore('/api/blood_stations/selected/', this.$axios)
    // this.widgetStore = new WidgetStore('/api/donations/widget/', this.$axios)
    // this.storiesStore = new StoriesStore('/api/stories/', this.$axios)
    // this.bloodStationsNeedStore = new ResourceStore('/api/needs/', this.$axios)
    // this.interestingBlockStore = new ResourceStore('/api/interesting/', this.$axios)
    // this.waitingDonorNowStore = new ResourceStore('/api/waiting_donor/', this.$axios)
    // this.mainPageStore = new ResourceStore('/api/users_count/', this.$axios)
    // this.spinnerStore = new SpinnerStore()
    // this.bonusStore = new BonusStore('/api/bonuses/', this.$axios)
    // this.oauthStore = new OauthStore(this.$axios)
  }
}

export default RootStore
