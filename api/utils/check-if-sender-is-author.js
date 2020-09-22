/**
 * Checks if the request sender is the author.
 *
 * @param {string} authUserId, Authenticated User's ID on the server.
 * @param {string} senderId, Request sender ID.
 */
export const checkIfSenderIsAuthor = (authUserId, senderId) => {
  if (authUserId !== senderId) {
    throw new Error('Bad request.');
  }
};
