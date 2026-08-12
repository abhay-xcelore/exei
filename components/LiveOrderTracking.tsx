import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, MoreHorizontal, X } from 'lucide-react';

interface TrackingStatus {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  icon?: React.ReactNode;
}

interface UserMessage {
  id: string;
  userName: string;
  userImage: string;
  message: string;
  timeAgo: string;
  rotation: number;
  hidden?: boolean;
}

interface LiveOrderTrackingProps {
  headerImage?: string;
  avatarImages?: string[];
  trackingStatuses?: TrackingStatus[];
  userMessages?: UserMessage[];
  notificationCount?: number;
  onMarkAsRead?: () => void;
  activeTab?: number;
}

const LiveOrderTracking: React.FC<LiveOrderTrackingProps> = ({
  headerImage,
  avatarImages = [],
  trackingStatuses = [],
  userMessages = [],
  notificationCount = 18,
  onMarkAsRead = () => {},
  activeTab = 0,
}) => {
  // Default tracking statuses
  const defaultStatuses: TrackingStatus[] = [
    {
      id: '1',
      title: 'Order Confirmed',
      description: 'Order received successfully.',
      completed: true,
    },
    {
      id: '2',
      title: 'Package Shipped',
      description: 'Tracking activated instantly.',
      completed: true,
    },
  ];

  // Default user messages
  const defaultMessages: UserMessage[] = [
    {
      id: '1',
      userName: 'Keven',
      userImage: '/default-avatar-1.png',
      message: 'Where is my order?',
      timeAgo: '5 min ago',
      rotation: -4,
    },
    {
      id: '2',
      userName: '',
      userImage: '',
      message: 'ere is my order?',
      timeAgo: '5 min ago',
      rotation: 3,
      hidden: true,
    },
  ];

  const statuses = trackingStatuses.length > 0 ? trackingStatuses : defaultStatuses;
  const messages = userMessages.length > 0 ? userMessages : defaultMessages;

  if (activeTab !== 0) return null;

  return (
    <div className="relative w-full max-w-[360px] flex flex-col items-center gap-2.5">
      {/* Main Floating Tracking Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full bg-white rounded-[24px] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 relative z-20"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3.5">
          <span className="bg-[#F3F4F6] text-gray-800 text-xs font-medium px-3.5 py-1 rounded-lg">
            Query
          </span>
          <div className="w-7 h-7 rounded-lg border border-gray-100 flex items-center justify-center bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Title */}
        <h4 className="text-base font-bold text-gray-900 mb-3 tracking-tight">
          Live Order Tracking Details
        </h4>

        {/* Tracking Status List */}
        <div className="space-y-2">
          {statuses.map((status, index) => (
            <motion.div
              key={status.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.2 + index * 0.1,
                ease: 'easeOut',
              }}
              className="flex items-center gap-3 bg-white border border-gray-100/90 p-2.5 rounded-2xl shadow-xs hover:shadow-sm transition-shadow"
            >
              {/* Status Icon */}
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                {status.icon ? (
                  status.icon
                ) : (
                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                )}
              </div>

              {/* Status Text */}
              <div>
                <p className="text-xs font-bold text-gray-900">{status.title}</p>
                <p className="text-[11px] text-gray-500">{status.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Avatar Stack */}
        {avatarImages.length > 0 && (
          <div className="flex items-center justify-end -space-x-1 mt-3 pr-1">
            {avatarImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.4 + index * 0.1,
                }}
                className="w-6 h-6 rounded-full border-2 border-white overflow-hidden shrink-0 shadow-sm"
              >
                <img
                  src={image}
                  alt={`Avatar ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Floating Question Bubbles */}
      <div className="w-full flex items-center justify-center gap-2 relative z-30 -mt-3">
        {messages.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 15, rotate: msg.rotation }}
            animate={{
              opacity: 1,
              y: msg.rotation < 0 ? [0, -3, 0] : [0, 3, 0],
              rotate: msg.rotation,
            }}
            transition={{
              opacity: { duration: 0.4, delay: 0.2 + index * 0.1 },
              y: {
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.3,
              },
            }}
            className={`bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-gray-100 text-xs flex items-center gap-2 ${
              msg.hidden ? 'hidden sm:flex' : 'flex'
            }`}
          >
            {/* User Avatar */}
            {msg.userImage && (
              <div className="w-5 h-5 rounded-full overflow-hidden shrink-0">
                <img
                  src={msg.userImage}
                  alt={msg.userName}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Message Text */}
            <span className="text-[11px] text-gray-800">
              {msg.userName && (
                <strong className="font-semibold">{msg.userName}</strong>
              )}{' '}
              <span className="text-gray-400">{msg.message}</span>
            </span>

            {/* Time */}
            <span className="text-[10px] text-gray-400 shrink-0 ml-1">
              {msg.timeAgo}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Notification Pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.4,
          type: 'spring',
          stiffness: 200,
        }}
        className="bg-white rounded-full px-4 py-1.5 shadow-xl border border-gray-100 flex items-center gap-3 relative z-30 mt-1"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5E2C] animate-pulse" />
          <span className="text-xs font-medium text-gray-800">
            {notificationCount} New Notifications
          </span>
        </div>
        <button
          onClick={onMarkAsRead}
          className="bg-[#232326] text-white text-[10px] font-medium px-3 py-1 rounded-full hover:bg-black transition-colors"
        >
          Mark as read
        </button>
        <X className="w-3.5 h-3.5 text-gray-400 cursor-pointer hover:text-gray-600" />
      </motion.div>
    </div>
  );
};

export default LiveOrderTracking;
