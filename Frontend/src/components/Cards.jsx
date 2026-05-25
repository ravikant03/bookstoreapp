import React from "react";
import { Link } from "react-router-dom";

function Cards({ item, onDelete }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt={item.name} className="h-52 w-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.description || item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              {onDelete ? (
                <div className="flex gap-2">
                  <Link
                    to={`/books/edit/${item._id}`}
                    className="px-3 py-1 rounded-full border hover:bg-blue-500 hover:text-white duration-200"
                  >
                    Edit
                  </Link>
                  <button
                    className="px-3 py-1 rounded-full border hover:bg-red-500 hover:text-white duration-200"
                    onClick={() => onDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                  Read Now
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
