// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Participant extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("address", Value.fromBytes(Bytes.empty()));
    this.set("points", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Participant entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Participant must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Participant", id.toString(), this);
    }
  }

  static load(id: string): Participant | null {
    return changetype<Participant | null>(store.get("Participant", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get referals(): Array<Bytes> | null {
    let value = this.get("referals");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set referals(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("referals");
    } else {
      this.set("referals", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get deeds(): Array<string> | null {
    let value = this.get("deeds");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set deeds(value: Array<string> | null) {
    if (!value) {
      this.unset("deeds");
    } else {
      this.set("deeds", Value.fromStringArray(<Array<string>>value));
    }
  }

  get points(): BigInt {
    let value = this.get("points");
    return value!.toBigInt();
  }

  set points(value: BigInt) {
    this.set("points", Value.fromBigInt(value));
  }
}

export class Deed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("index", Value.fromBigInt(BigInt.zero()));
    this.set("level", Value.fromBigInt(BigInt.zero()));
    this.set("initialOnwer", Value.fromBytes(Bytes.empty()));
    this.set("currentOwner", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Deed entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Deed must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Deed", id.toString(), this);
    }
  }

  static load(id: string): Deed | null {
    return changetype<Deed | null>(store.get("Deed", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get level(): BigInt {
    let value = this.get("level");
    return value!.toBigInt();
  }

  set level(value: BigInt) {
    this.set("level", Value.fromBigInt(value));
  }

  get initialOnwer(): Bytes {
    let value = this.get("initialOnwer");
    return value!.toBytes();
  }

  set initialOnwer(value: Bytes) {
    this.set("initialOnwer", Value.fromBytes(value));
  }

  get currentOwner(): Bytes {
    let value = this.get("currentOwner");
    return value!.toBytes();
  }

  set currentOwner(value: Bytes) {
    this.set("currentOwner", Value.fromBytes(value));
  }
}