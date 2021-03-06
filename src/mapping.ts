import { BigInt } from "@graphprotocol/graph-ts"
import {
  BalconyDeed,
  Approval,
  ApprovalForAll,
  NewDeed,
  Transfer,
  UpdateDeed,
} from "../generated/BalconyDeed/BalconyDeed"
import { Participant, Deed } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  // let entity = ExampleEntity.load(event.transaction.from.toHex())

  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (!entity) {
  //   entity = new ExampleEntity(event.transaction.from.toHex())

  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }

  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)

  // // Entity fields can be set based on event parameters
  // entity.owner = event.params.owner
  // entity.approved = event.params.approved

  // // Entities can be written to the store with `.save()`
  // entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.addressToDeed(...)
  // - contract.balanceOf(...)
  // - contract.baseURI(...)
  // - contract.deedIndex(...)
  // - contract.getAllDeeds(...)
  // - contract.getAllParticipants(...)
  // - contract.getApproved(...)
  // - contract.isApprovedForAll(...)
  // - contract.maxTotalSupply(...)
  // - contract.mintFee(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.participants(...)
  // - contract.royaltyInfo(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenURI(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleNewDeed(event: NewDeed): void {
  let participant = Participant.load(event.params.DeedOwner.toHex())
  let contract = BalconyDeed.bind(event.address)

  if (!participant) {
    participant = new Participant(event.params.DeedOwner.toHex())
    participant.address = event.params.DeedOwner
   
  }
  let deed = contract.addressToDeed(event.params.DeedOwner)

  participant.points = deed.value2
  participant.save()


  let referer = Participant.load(event.params.Referer.toHex());

  if (!referer) {
    referer = new Participant(event.params.Referer.toHex())
    referer.address = event.params.Referer
  }
  let deed1 = contract.addressToDeed(event.params.Referer)
  referer.points = deed1.value2;
  referer.save()

}

export function handleTransfer(event: Transfer): void {}
  
export function handleUpdateDeed(event: UpdateDeed): void {}
  
