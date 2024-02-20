// SPDX-License-Identifier:MIT
pragma solidity ^0.8.4;

interface IStaking {


    function stake(uint256 _amount, uint _duration) external;
      function unstake() external;

    function withdraw() external;

    function emergencyWithdraw() external;

    function checkUserStakedBalance(address _user) external view returns (uint256);
    function totalStakedBalance() external view returns (uint256) ; 

    function checkContractBalance() external view returns (uint bal);
}