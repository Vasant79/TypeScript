/**
 *
 * @param id is of type string and number
 * lets you describe how a thing should look
 * types - lets to do | and &
 */

type Id = number | string;

function getId(id: Id) {
  console.log(id);
}

function getId2(id: number | string) {
  console.log(id);
}

getId(32);
getId("vasu79");
