const GeoRewards = artifacts.require("GeoRewards");

module.exports = function (deployer) {
  deployer.deploy(GeoRewards,"GeoRewards","GEOR","https://geolancer.app/token/");
};
