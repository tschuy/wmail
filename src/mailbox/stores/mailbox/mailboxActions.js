const alt = require('../alt')
// const Mailbox = require('./Mailbox')

class MailboxActions {
  /* **************************************************************************/
  // Loading
  /* **************************************************************************/

  /**
  * Indicates the store to drop all data and load from disk
  */
  load () { return {} }

  /* **************************************************************************/
  // C(R)UD
  /* **************************************************************************/

  /**
  * Creates a new mailbox
  * @param id: the id of the mailbox
  * @param data: the data to create it with
  */
  create (id, data) { return { id: id, data: data } }

  /**
  * Removes a mailbox
  * @param id: the id of the mailbox to update
  */
  remove (id) { return { id: id } }

  /**
  * Updates a mailbox
  * @param id: the id of the mailbox
  * @param updates: the updates to apply
  */
  update (id, updates) { return { id: id, updates: updates } }

  /* **************************************************************************/
  // Google
  /* **************************************************************************/

  /**
  * Updates the google config inside a mailbox
  * @param id: the id of the mailbox
  * @param updates: the updates to apply
  */
  updateGoogleConfig (id, updates) { return { id: id, updates: updates } }

  /**
  * Updates the google unread threads
  * @param id: the id of the mailbox
  * @param messageId: the id of the message
  * @param updates: the updates to merge in
  */
  updateGoogleUnread (id, messageId, updates) { return { id: id, messageId: messageId, updates: updates } }

  /**
  * Sets that a thread has sent a notification
  * @param id: the id of the mailbox
  * @param messageId: the id of the message
  */
  setGoogleUnreadNotificationShown (id, messageId) { return { id: id, messageId: messageId } }

  /* **************************************************************************/
  // Avatar
  /* **************************************************************************/

  /**
  * Sets a custom avatar
  * @param id: the id of the mailbox
  * @param b64Image: the image to set
  */
  setCustomAvatar (id, b64Image) { return { id: id, b64Image: b64Image } }

  /* **************************************************************************/
  // Active
  /* **************************************************************************/

  /**
  * Changes the active mailbox
  */
  changeActive (id) { return { id: id } }

  /* **************************************************************************/
  // Ordering
  /* **************************************************************************/

  /**
  * Moves a mailbox up in the index
  * @param id: the id of the mailbox
  */
  moveUp (id) { return { id: id } }

  /**
  * Moves a mailbox down in the index
  * @param id: the id of the mailbox
  */
  moveDown (id) { return { id: id } }

}

module.exports = alt.createActions(MailboxActions)
