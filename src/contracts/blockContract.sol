pragma solidity ^0.4.24;

contract BlockContract {

  struct agreement {
    uint expiration;
    uint balance;
    uint clientHash;
    uint employerHash;
    uint disputeHash;
    address client;
    address employer;
  }

mapping(uint => agreement) Agreements;
uint agreementCount;

function createAgreement(uint clientKey, address employerAddr, uint employerKey, uint value, uint disputeKey, uint expireTime) public returns (uint agreementID){
  agreementID = agreementCount++;
  Agreements[agreementID].expiration = block.number + expireTime;
  Agreements[agreementID].client = msg.sender;
  Agreements[agreementID].employer = employerAddr;
  Agreements[agreementID].balance = value;
  Agreements[agreementID].clientHash = clientKey;
  Agreements[agreementID].employerHash = employerKey;
  Agreements[agreementID].disputeHash = disputeKey;
  return agreementID;
}

function endAgreement(uint id, uint clientKey, uint employerKey) public returns (uint newBalance){
  agreement a = Agreements[id];
  require(block.number >= a.expiration && clientKey == a.clientHash && employerKey == a.employerHash);
  a.client.transfer(a.balance);
  return a.balance;
}

function cancelAgreementEarly(uint id, uint clientKey, uint employerKey) public returns (bool){
  agreement a = Agreements[id];
  require(block.number < a.expiration && a.clientHash == clientKey && a.employerHash == employerKey);
  a.employer.transfer(a.balance);
  return true;
}

function disputeAgreement(uint id, uint votesForClient, uint votesForEmployer, uint disputeKey) public returns (uint newBalance){
  agreement a = Agreements[id];
  require(block.number >= a.expiration && a.disputeHash == disputeKey);
  if(votesForClient > votesForEmployer){
    a.client.transfer(a.balance);
  }
  if(votesForEmployer < votesForClient){
    a.employer.transfer(a.balance);
  }
  return a.balance;
}

}
